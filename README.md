# fulcro-exercises

A follow-up to the [Minimalist Fulcro Tutorial](https://fulcro-community.github.io/guides/tutorial-minimalist-fulcro/) to get hands dirty with Fulcro and learn and experience the theory in practice, through a series of gradually more challenging exercises.

## Prerequisites

* Studied the Minimalist Fulcro Tutorial
* Familiar with Clojure, ClojureScript, and at least somewhat with shadow-cljs

## Status

Work in progress, though already useful. Please share your experiences and ideas with me so that I can improve the exercises! Get in touch with `@holyjak` in the [`#fulcro` channel of the Clojurians Slack](https://app.slack.com/client/T03RZGPFR/C68M60S4F) or in [Zulip](https://clojurians.zulipchat.com/) or by [starting a discussion](https://github.com/fulcro-community/fulcro-exercises/discussions) here at GitHub.

## Usage

Clone this repo, enter the directory. Then install prerequisites:

    npm install

Compile the ClojureScript code and start a server for the UI:

    clojure -M:serve 
    # or, if using Emacs or needing Cider for some other reason:
    # clojure -M:cider:serve

You can now see the application at http://localhost:8000. Open it in Chrome, where you have [installed Fulcro Inspect](https://book.fulcrologic.com/#_install_fulcro_inspect) and [enabled custom formatters](https://book.fulcrologic.com/#_configure_chrome_development_settings)!

Now (after having accessed the web page!) connect to the cljs REPL: first connect to the nREPL running at port 9001 then execute `(shadow/repl :main)` there. (If you get "_No available JS runtime._" then you likely forgot to load the page in a browser first.)

Finally, open the `holyjak.fulcro-exercises` namespace and get coding, following the instructions provided there in the ns docstring!

**TIP**: Make sure that you select the correct _App_ at the bottom of Fulcro Inspect, if there are multiple (or hard-reload the page to get rid of all the past ones).

## Troubleshooting and getting help during the exercises

Use repeatedly `(hint <exercise number>)` (as long as there are any more hints for the exercise) to get useful tips when you get stuck.

Leverage the [Fulcro Troubleshooting Decision Tree](https://blog.jakubholy.net/2020/troubleshooting-fulcro/) to help you troubleshoot your problems.

Leverage Fulcro Inspect (especially the DB and perhaps Element tabs), check the Chrome JS Console for warnings and errors.

## License

Copyleft © 2021 Jakub Holý

Distributed under the [Unlicense](https://unlicense.org/).
