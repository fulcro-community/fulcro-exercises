(ns holyjak.fulcro-exercises.impl
  (:require
    [clojure.string :as str]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]))

(declare hints)
(defonce hints-shown (atom nil))

(defn hint [exercise-nr]
  {:pre [(int? exercise-nr)
         (not (neg? exercise-nr))
         (< exercise-nr (count hints))]}
  (let [exercise-hints   (get hints exercise-nr)
        shown-previously (get @hints-shown exercise-nr 0)
        next?            (< shown-previously (count exercise-hints))
        more?            (not= (inc shown-previously) (count exercise-hints))
        printit!         #(println (str/join "\n\n" %))]
    (if next?
      (do (swap! hints-shown update exercise-nr (fnil inc 0))
          (cond-> (subvec exercise-hints 0 (inc shown-previously))
                  more? (conj "Repeat for more...")
                  true printit!))
      (printit! exercise-hints))))

(defonce current-app (atom nil))

(defn render!
  "Renders the given root component.
  Returns the (new) fulcro app."
  [RootComponent]
  (println "Rendering" RootComponent "...")
  (let [current-root? (= (some-> @current-app app/root-class .-name)
                         (.-name RootComponent))
        app           (if current-root? @current-app (app/fulcro-app))]
    (reset! current-app app)
    (app/mount! app RootComponent "app")
    app))

(defn refresh []
  (when-let [app @current-app]
    (app/mount! app
                (app/root-class app)
                "app")))

(comment
  (hint 1)
  (comp/component-name (app/root-class @current-app)),)

(def hints
  {0 ["No hints for the self-test exercise, sorry!"]
   1 ["You want to use the query of the root component, Root1"
      "Use `comp/get-query` to get it!"
      "1.4 Normalization: Add idents to all components (but the root)"
      "1.4b Normalization: Use :team/id, :player/id, :address/city as the idents (same as `(fn [] [:team/id (:team/id <props>)])` ...). But also remember to add the IDs to the queries!"
      "1.5 Normalization fix: remember to use comp/get-query in your queries!"
      "1.6 merge-component!: We cannot use Root1 because it has no ident and thus we cannot merge the whole tree. But we can merge `(:teams data-tree)` using the correct component and we can re-establish the link from `:teams` be leveraging the merge-component! argument `:append [:teams]`"]})

