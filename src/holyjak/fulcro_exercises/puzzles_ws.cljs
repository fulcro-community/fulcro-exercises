(ns holyjak.fulcro-exercises.puzzles-ws
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [nubank.workspaces.core :as ws]
    [nubank.workspaces.card-types.fulcro3 :as ct.fulcro]
    [com.fulcrologic.fulcro.mutations :as m]
    [com.fulcrologic.fulcro.dom :as dom]))

(m/defmutation toggle-color [_]
  (action [{:keys [state]}]
    (swap! state update :ui/red? not)))

(defsc ColorChangingSquare [this {:ui/keys [red?]}]
   {:query [:ui/red?]
    :ident (fn [] [:component/id :ColorChangingSquare])
    :initial-state {}}
   (dom/div {:style {:background-color (if red? "red" "blue")}}
      "Hello!"
      (dom/button {:onClick #(comp/transact! this (toggle-color))}
                  (str "Make " (if red? "blue" "red")))))

(ws/defcard fulcro-demo-card
            (ct.fulcro/fulcro-card
              {::ct.fulcro/root       ColorChangingSquare
               ::ct.fulcro/wrap-root? true}))