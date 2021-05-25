(ns holyjak.solutions-read-when-desperate
  "Solutions to the exercises - read it when you are desperate!"
  (:require
    [holyjak.fulcro-exercises.impl :refer [hint init-and-render! render! show-client-db]]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc transact!]]
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.dom :as dom :refer [button div form h1 h2 h3 input label li ol p]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]))


(comment ; 1 "Hard-coded DOM"
  (do
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
    ,))

(comment ; 3 "Externalizing data"
  (do
    (defsc ValuePropositionPoint [_ {:proposition/keys [label]}]
           {:query [:proposition/label]}
           (dom/li label))

    (def ui-value-proposition-point (comp/factory ValuePropositionPoint {:keyfn :proposition/label}))

    (defsc Root3 [_ {:page/keys [heading value-proposition-points]}]
           {:query [:page/heading {:page/value-proposition-points (comp/get-query ValuePropositionPoint)}]}
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
    ,))

(comment ; 4 "Insert data into the client DB with merge/merge!"
  (do
    (defsc ValuePropositionPoint [_ {:proposition/keys [label]}]
           {:query [:proposition/label]}
           (dom/li label))

    (def ui-value-proposition-point (comp/factory ValuePropositionPoint {:keyfn :proposition/label}))

    (defsc Root4 [_ {:page/keys [heading value-proposition-points]}]
           {:query [:page/heading {:page/value-proposition-points (comp/get-query ValuePropositionPoint)}]}
           #_"TODO"
           (dom/div
             (dom/h1 :#title {:style {:textAlign "center"}} "hdr:" heading)
             (dom/ul (map ui-value-proposition-point value-proposition-points))))

    (def app4 (render! Root4))

    (merge/merge!
      app4
      {:page/heading "<4> Fulcro is:"
       :page/value-proposition-points
                     [{:proposition/label "Malleable"}
                      {:proposition/label "Full-stack"}
                      {:proposition/label "Well-designed"}]}
      (comp/get-query Root4))
    (app/schedule-render! app4) ; merge! only inserts the data, does not tell the app to re-render
    ,))

(comment ; 5 "Normalization and merge-component!"
  ;; VARIANT 5.1
  (do
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

    (do (merge/merge! app5 data-tree (comp/get-query Root5))
        (app/schedule-render! app5))
    ,))

(comment ; 5 "Normalization and merge-component!"
  ;; VARIANT 5.2 + 5.3
  (do
    (defsc Address [_ {city :address/city}]
           {:query [:address/city]
            :ident :address/city}
           (p "City: " city))

    (defsc Player [_ {:player/keys [name address]}]
           {:query [:player/id :player/name {:player/address (comp/get-query Address)}]
            :ident :player/id}
           (li "name: " name " lives at: " ((comp/factory Address) address)))

    (def ui-player (comp/factory Player {:keyfn :player/id}))

    (defsc Team [_ {:team/keys [name players]}]
           {:query [:team/id :team/name {:team/players (comp/get-query Player)}]
            :ident :team/id}
           (div (h2 "Team " name ":")
                (ol (map ui-player players))))

    (def ui-team (comp/factory Team {:keyfn :team/id}))

    (defsc Root5 [_ {teams :teams}]
           {:query [{:teams (comp/get-query Team)}]} ; NOTE: This is on purpose incomplete
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

    (do (merge/merge! app5 data-tree (comp/get-query Root5))
        (app/schedule-render! app5))
    ,))

(comment ; 5 "Normalization and merge-component!"
  ;; VARIANT 5.4

  ;; !!! BEWARE: Only the merge-component! part provided here,
  ;;     which would replace the original call to merge/merge!;
  ;;     the rest is the same.
  ;; <THE SAME CODE AS IN 5.3 HERE...>
  (merge/merge-component!
    app5
    Team
    (-> data-tree :teams first)
    :append [:teams])
  ,)

(comment ; 6 Client-side mutations
  ;; NOTE: There are many ways to implement the details, this is just one
  (do

    (defn set-player-checked* [new-value state-map id]
      (assoc-in state-map [:player/id id :ui/checked?] new-value))

    (defmutation set-players-checked [{:keys [players value]}]
      (action [{:keys [state]}]
        (swap! state #(reduce (partial set-player-checked* value) % players))))

    (defn make-player->team
      "Take a seq of teams and look into their `:team/players` to construct the map
      `player-id` -> `team-id`, useful to look up a player's team."
      ;; To try it out:
      ;; `(->> @(::app/state-atom app6) :team/id vals make-player->team)`
      [teams]
      (into {}
            (for [{team-id :team/id
                   players :team/players} teams
                  [_ player-id]           players]
              [player-id team-id])))

    (defn delete-player [state-map [player-id team-id]]
      (-> state-map
          (update :player/id dissoc player-id)
          (merge/remove-ident* [:player/id player-id]
                               [:team/id team-id :team/players])))

    (defn delete-selected* [{player-map :player/id :as state-map}]
      (let [player->team  (make-player->team (-> state-map :team/id vals))
            selected-player-ids
                          (->> player-map
                               vals
                               (filter :ui/checked?)
                               (map :player/id))
            player-teams (map player->team selected-player-ids)]
        (reduce
          delete-player
          state-map
          (map vector selected-player-ids player-teams))))

    (defmutation delete-selected [_]
      (action [{:keys [state]}]
        (swap! state delete-selected*)))

    (defsc Player [this {:keys [player/id player/name ui/checked?]}]
           {:query [:player/id :player/name :ui/checked?]
            :ident :player/id}
           (li
             (input {:type    "checkbox"
                     :checked (boolean checked?)
                     :onClick #(transact! this [(set-players-checked {:players [id] :value (not checked?)})])})
             name))

    (def ui-player (comp/factory Player {:keyfn :player/id}))

    (defsc Team [this {:team/keys [name players] checked? :ui/checked?}]
           {:query [:team/id :team/name :ui/checked? {:team/players (comp/get-query Player)}]
            :ident :team/id}
           (let [all-checked? (and (seq players) (->> players (map :ui/checked?) (every? boolean)))]
             (div (h2 "Team " name ":")
                  (label (input {:type    "checkbox"
                                 :checked all-checked?
                                 :onClick #(transact! this [(set-players-checked {:players (map :player/id players)
                                                                                  :value   (not all-checked?)})])})
                         "Select all")
                  (ol (map ui-player players)))))

    (def ui-team (comp/factory Team {:keyfn :team/id}))

    (defsc Root6 [this {teams :teams}]
           {:query [{:teams (comp/get-query Team)}]}
           (form
             (h1 "Teams")
             (button {:type "button"
                      :onClick #(transact! this [(delete-selected nil)])} "Delete selected")
             (map ui-team teams)))

    (def app6 (render! Root6))

    (run!
      #(merge/merge-component! app6 Team % :append [:teams])
      [#:team{:name "Explorers" :id :explorers
              :players [#:player{:id 1 :name "Jo"}
                        #:player{:id 2 :name "Ola"}
                        #:player{:id 3 :name "Anne"}]}
       #:team{:name "Bikers" :id :bikers
              :players [#:player{:id 4 :name "Cyclotron"}]}])

    ,))
