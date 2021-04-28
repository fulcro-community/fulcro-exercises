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
    [holyjak.fulcro-exercises.impl :refer [hint init-and-render! render! show-client-db]]
    [com.fulcrologic.fulcro.application :as app]
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
      "TODO")

    (render! Root1)))

(comment ; 2 "Extracting a child component"
  (do
    ;; Refactor the previous solution by moving the `<li>` into a separate
    ;; component called `ValuePropositionPoint` and `map` over the provided
    ;; `value-proposition-points` to produce the whole list.
    (def value-proposition-points
      [{:proposition/label "Malleable"} {:proposition/label "Full-stack"} {:proposition/label "Well-designed"}])

    (defsc Root2 [_ _]
      {}
      "TODO")

    (render! Root2)
    ; (hint 2)

    ;; Task 2.b: Make sure you do not get the React error <<Each child in a list
    ;; should have a unique "key" prop.>> in the Chrome Console.
    ; (hint 2)
    ,))

(comment ; 3 "Externalizing data"
  (do
    ;; We still want to render the same HTML but this time we want to read the
    ;; data from Fulcro's client DB, where it is inserted by `init-and-render!`.
    ;; Start from the previous solution but replace the hardcoded text and global
    ;; def with props.
    (defsc Root3 [_ _]
      {}
      "TODO")

    (init-and-render!
      Root3
      {:page/heading "<3> Fulcro is:"
       :page/value-proposition-points
                     [{:proposition/label "Malleable"}
                      {:proposition/label "Full-stack"}
                      {:proposition/label "Well-designed"}]})

    ;(hint 3)
    ;; Tip: Use Fulcro Inspect to see the content of the client DB
    ;;      Also try to use the provided `(show-client-db)` function for that.
    ,))

(do;comment ; 4 "Insert data into the client DB with merge/merge!"
  (do
    ;; Again we build on the previous solution but instead of inserting the data
    ;; at app initialization, we will revert to ordinary `render!` and insert them
    ;; manually with a call to `merge/merge!`
    (defsc Root4 [_ _]
      {}
      "TODO")

    (def app4 (render! Root4))

    ;; What do you think the client DB will look like? Think, write it down, then check it
    ;; using Fulcro Inspect - DB (or `(show-client-db)`)
    (merge/merge! app4 nil nil) ; TODO Implement
    (app/schedule-render! app4) ; merge! only inserts the data, does not tell the app to re-render
    ; (hint 4)
    ; (hint 4)
    ,))

(comment ; 5 "Normalization and merge-component!"
  (do
    ;; Let's see how to insert data into the client DB for our UI to display!
    ;; We have this UI:
    ;; Root1
    ;;   Team(s)
    ;;     Player(s)
    ;;       Address
    ;; and a tree of data  to give to it. Read on!
    ;;
    ;; BEWARE: The provided code on purpose omits some things you would normally have included in your components

    (defsc Address [_ {city :address/city}]
      {:query [:address/city]}
      (p "City: " city))

    (defsc Player [_ {:player/keys [name address]}]
      {:query [:player/id :player/name :player/address]}
      (li "name: " name " lives at: " ((comp/factory Address) address)))

    (def ui-player (comp/factory Player {:keyfn :player/id}))

    (defsc Team [_ {:team/keys [name players]}]
      {:query [:team/id :team/name :team/players]}
      (div (h2 "Team " name ":")
           (ol (map ui-player players))))

    (def ui-team (comp/factory Team {:keyfn :team/id}))

    (defsc Root5 [_ {teams :teams}]
      {:query [:teams]} ; NOTE: This is on purpose incomplete
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
    (def app5 (render! Root5))

    ;; Now:
    ;; 1. Uncomment, complete, and run the merge/merge! call below to insert the data-tree into
    ;;    the client DB. Check the UI shows it.
    (comment (do (merge/merge! ...)
                 (app/schedule-render! app5)))
    ; (hint 5)
    ; (hint 5)

    ;; More tasks!
    ;; 2. Make sure the data is normalized in the DB by adding idents. What will the DB look like?
    ; (hint 5)
    ; (hint 5)
    ;;
    ;; 3. Now, even if your idents are correct, the data still does not
    ;;    seem to be normalized as you would expect. Why? What did we forget?
    ;;    Is something wrong with our queries?! (Hint: yes, it is)
    ;;    Fix it and try again!
    ;;    Tip: force-reload the page to clean the client DB
    ; (hint 5)

    ;; 4. Rewrite the code to use merge/merge-component! instead.
    ;;    What is the correct target component? How to make sure the data looks
    ;;    just like before?
    ;;   Really try your best to get the make the right merge-component! call!
    ;;   Note: You do not need to call app/schedule-render!,
    ;;   merge-component! does schedule a render
    ; (hint 5)
    ; (hint 5)
    ; (hint 5)
    ,))

;; TODO Additional exercises:
;; - mutation
;; - example of ui-only data
;; - load! + targeting + ? df/marker
;; - anything else from the Minim. Fulcro Tutorial should be added?
;;   - Initial state propagation?
;;   - Computed props for a callback or parent-visible prop
;;   - pre-merge ?! / loading dyn. data for a defsc containing a router x we did not learn routers
;;   - Link Query? But not covered by MFT
