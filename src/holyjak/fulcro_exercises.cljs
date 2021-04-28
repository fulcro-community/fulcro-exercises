(ns holyjak.fulcro-exercises
  "This is a series of exercises to help you learn Fulcro, via the REPL. See the README.md!

  How to use:
  - Load this file into the cljs REPL (using the commands provided by your editor)
  - Un-comment *temporarily* the exercise you are working on (by replacing `(comment ...`
    with `(do ;comment ...`) Shadow-cljs will thus evaluate the code and it will render.
    Tip: Hard-reload the page occasionally to get rid of residues of past exercises.
  - Read the instructions in the comments, make your changes, re-evaluate the exercise
  - Call `(hint <exercises number>)` to get help. Repeated calls may provide more help.
  - See 'Troubleshooting and getting help during the exercises' in the README
  "
  (:require
    [holyjak.fulcro-exercises.impl :refer [hint init-and-render! render!]]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div h1 h2 h3 li ol p]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defn init [])

(comment ; 0 "Try it out!"
  (do
    (defsc Root0 [_ _]
      (h1 "Hello, I am a Fulcro app from the exercise 0!"))

    ;; Send this whole `do` to the REPL. Do you see the UI change in the browser?
    (render! Root0)

    (comment ; try running the hint fn 3 times!
      (hint 0)
      (hint 0)
      (hint 0))

    nil))

(comment ; 1 "Hard-coded DOM"
  (do
    ;; Complete the body of the Root1 component to render the following html:
    ;;
    ;; <div>
    ;;   <h1 id="title" style="text-align: center;">Fulcro is:</h1>
    ;;   <ul>
    ;;     <li>Malleable</li>
    ;;     <li>Full-stack</li>
    ;;     <li>Well-designed</li>
    ;;   </ul>
    ;; </div>
    ;;
    (defsc Root1 [_ _]
      {}
      #_"TODO"
      (dom/div
        (dom/h1 :#title {:style {:textAlign "center"}} "Fulcro is:")
        (dom/ul
          (dom/li "Malleable")
          (dom/li "Full-stack")
          (dom/li "Well-designed"))))

    (render! Root1)))

(comment ; 2 "Extracting a child component"
  (do
    ;; Refactor the previous solution by moving the `<li>` into a separate
    ;; component called `ValuePropositionPoint` and `map` over the provided
    ;; `value-proposition-points` to produce the whole list.
    (def value-proposition-points
      [{:proposition/label "Malleable"} {:proposition/label "Full-stack"} {:proposition/label "Well-designed"}])

    (defsc ValuePropositionPoint [_ {:proposition/keys [label]}]
      (dom/li label))

    (def ui-value-proposition-point (comp/factory ValuePropositionPoint {:keyfn :proposition/label}))

    (defsc Root2 [_ _]
      {}
      #_"TODO"
      (dom/div
        (dom/h1 :#title {:style {:textAlign "center"}} "<2> Fulcro is:")
        (dom/ul (map ui-value-proposition-point value-proposition-points))))

    (render! Root2)
    ; (hint 2)

    ;; Task 2.b: Make sure you do not get the React error <<Each child in a list
    ;; should have a unique "key" prop.>> in the Chrome Console.
    ; (hint 2)
    ,))

(do;comment ; 3 "Externalizing data"
  (do
    ;; We still want to render the same HTML but this time we want to read the
    ;; data from Fulcro's client DB, where it is inserted by `init-and-render!`.
    ;; Start from the previous solution but replace the hardcoded text and global
    ;; def with props.
    (defsc ValuePropositionPoint [_ {:proposition/keys [label]}]
      (dom/li label))

    (def ui-value-proposition-point (comp/factory ValuePropositionPoint {:keyfn :proposition/label}))

    (defsc Root3 [_ {:page/keys [heading value-proposition-points]}]
      {:query [:page/heading :page/value-proposition-points]} ; FIXME get-query <> hint
      #_"TODO"
      (dom/div
        (dom/h1 :#title {:style {:textAlign "center"}} "hdr:" heading)
        (dom/ul (map ui-value-proposition-point value-proposition-points))))

    (init-and-render!
      Root3
      {:page/heading "<3> Fulcro is:"
       :page/value-proposition-points
                     [{:proposition/label "Malleable"}
                      {:proposition/label "Full-stack"}
                      {:proposition/label "Well-designed"}]})

    ;(hint 3) ; FIXME On using Fulcro Inspect
    ,))

(comment ; 4 "Insert data into the client DB with merge/merge!"
  (do
    ;; Again we build on the previous solution but instead of inserting the data
    ;; it app initialization, we will revert to ordinary `render!` and insert them
    ;; manually with a call to `merge/merge!`
    (defsc Root4 [_ _]
      {}
      "TODO")

    (def app4 (render! Root4))

    (merge/merge! app4 nil nil) ; FIX ME
    ; FIXME Add hints
    ,))

(comment ; 5 "Simple UI tree"
  (do
    ;; Let's see how to insert data into the client DB for our UI to display!
    ;; We have this UI:
    ;; Root1
    ;;   Team(s)
    ;;     Player(s)
    ;;       Address
    ;; and a tree of data  to give to it. Read on!
    ;;
    ;; BEWARE: This exercise on purpose omits some things you would normally have included in your components

    (defsc Address [_ {city :address/city}]
      {:query [:address/city]}
      (p "City: " city))

    (defsc Player [_ {:player/keys [name address]}]
      {:query [:player/id :player/name :player/address]}
      (li "name: " name " lives at: " ((comp/factory Address) address)))

    (def ui-player (comp/factory Player))

    (defsc Team [_ {:team/keys [name players]}]
      {:query [:team/id :team/name :team/players]}
      (div (h2 "Team " name ":")
           (ol (map ui-player players))))

    (def ui-team (comp/factory Team))

    (defsc Root1 [_ {teams :teams}]
      {:query [:teams]}
      (div
        (h1 "Teams")
        (p "Debug: teams = " (dom/code (pr-str teams)))
        (map ui-team teams)))

    (def data-tree
      "The data that our UI should display"
      {:teams [#:team{:name "Hikers" :id :hikers
                      :players [#:player{:name "Jon" :address #:address{:city "Oslo"} :id 1}
                                #:player{:name "Ola" :address #:address{:city "Trondheim"} :id 2}]}]})

    ;; Render the app (without any data so far):
    (def app (render! Root1))

    ;; Now:
    ;; 1. Uncomment, complete, and run the merge/merge! call below to insert the data-tree into the client DB;
    ;;    check the UI shows it.
    (comment (merge/merge! ...))
    ;; 2. What do you think the client DB will look like? Think, write it down, then check it
    ;;    using Fulcro Inspect (remember to select the correct 'App', i.e. .../Root1, at the bottom
    ;; NOTE: We cannot use merge-component! (yet) because it requires a component with an ident
    ;; to get help, run:
    (comment
      (hint 1))

    ;; More tasks!
    ;; 3. Fix the React warning 'Each child in a list should have a unique "key" prop.'
    ;; 4. Make sure the data is normalized in the DB by adding idents. What will the DB look like?
    ;;
    ;; 5. Now, even if your idents are correct, the data still does not
    ;;    seem to be normalized as you would expect. Why? What did we forget?
    ;;    Is something wrong with our queries?! (Hint: yes, it is)
    ;;    Fix it and try again!
    ;;    Tip: Run `(swap! (::app/state-atom app) dissoc :teams)` to clear the DB.

    ;; 6. Rewrite the code to use merge/merge-component! instead.
    ;;    What is the correct target component? How to make sure the data looks
    ;;    just like before?
    ;;   Really try your best to get the make the right merge-component! call!

    nil))
