(ns holyjak.solutions-read-when-desperate
  "Solutions to the exercises - read it when you are desperate!")


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
  ;; !!! Only the merge-component! part provided here,
  ;; which would replace the original call to merge/merge!;
  ;; the rest is the same.
  (merge/merge-component!
    app5
    Team
    (-> data-tree :teams first)
    :append [:teams])
  ,)
