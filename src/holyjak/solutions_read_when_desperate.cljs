(ns holyjak.solutions-read-when-desperate
  "Solutions to the exercises - read it when you are desperate!")

(comment

  ;; Exercise 1.1
  (merge/merge!
    app
    data-tree
    (comp/get-query Root1))

  ;; Exercise 1.5
  (merge/merge-component!
    app
    Team
    (:teams data-tree)
    :append [:teams])

  nil)
