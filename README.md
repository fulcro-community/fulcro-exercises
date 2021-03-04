# fulcro-exercises

A follow-up to the [Minimalist Fulcro Tutorial](https://fulcro-community.github.io/guides/tutorial-minimalist-fulcro/) to get hands dirty with Fulcro and learn and experience the theory in practice, through a series of gradually more challenging exercises.

## Prerequisites

* Studied the Minimalist Fulcro Tutorial
* Familiar with Clojure, ClojureScript, and at least somewhat with shadow-cljs

## Status

Work in progress, though already useful. Provide feedback to `@holyjak` in the [`#fulcro` channel of the Clojurians Slack](https://app.slack.com/client/T03RZGPFR/C68M60S4F) or in [Zulip](https://clojurians.zulipchat.com/).

## Usage

Clone this repo, enter the directory.

Compile the ClojureScript code and start a server for the UI:

    clojure -M:serve

You can now see the application at http://localhost:8000. Open it in Chrome, where you have [installed Fulcro Inspect](https://book.fulcrologic.com/#_install_fulcro_inspect) and [enabled custom formatters](https://book.fulcrologic.com/#_configure_chrome_development_settings)!

Now (after having accessed the web page!) connect to the cljs REPL: first connect to the nREPL running at port 9000 then execute `(shadow/repl :main)` there. (If you get "_No available JS runtime._" then you likely forgot to load the page in a browser first.)

Finally, open the `holyjak.fulcro-exercises` namespace and get coding, following the instructions provided there!

**TIP**: Make sure that you select the correct _App_ at the bottom of Fulcro Inspect.

## License

Copyleft © 2021 Jakub Holý

Distributed under the [Unlicense](https://unlicense.org/).
