# fulcro-exercises

A follow-up to the [Minimalist Fulcro Tutorial](https://fulcro-community.github.io/guides/tutorial-minimalist-fulcro/) to get hands dirty with Fulcro and learn and experience the theory in practice, through a series of gradually more challenging exercises.

## Prerequisites

* Studied the Minimalist Fulcro Tutorial
* Familiar with Clojure, ClojureScript, and at least somewhat with shadow-cljs

## Feedback!

Please share your experiences and ideas with me so that I can improve the exercises! Get in touch with `@holyjak` in the [`#fulcro` channel of the Clojurians Slack](https://app.slack.com/client/T03RZGPFR/C68M60S4F) or in [Zulip](https://clojurians.zulipchat.com/) or by [starting a discussion](https://github.com/fulcro-community/fulcro-exercises/discussions) here at GitHub.

## Usage

Prerequisites: same as the [shadow-cljs requirements](https://github.com/thheller/shadow-cljs#requirements).

Clone this repo, enter the directory. Then install prerequisites:

    npm install 
    # or: yarn install  # reportedly yarn < v3 as of 8/2021

### Part 1: The exercises

Compile the ClojureScript code and start a server for the UI:

    npx shadow-cljs watch main
    # or `bb run` if you have Babashka

NOTE: For Calva, do instead start the REPL from the editor - [run Jack-in](https://calva.io/connect/#jack-in-let-calva-start-the-repl-for-you), selecting _shadow-cljs_ then the `:main` build. Remember to load the page in the browser, see below.

NOTE: For Emacs, connect to the REPL using `M-x cider-connect-cljs`

**BEWARE**: It might not work if your version of the [Clojure CLI](https://clojure.org/guides/getting_started#_clojure_installer_and_cli_tools) (`clojure --version`) is too old or, possibly, too new. The project has been tested with v.1.10.3.855.

You can now see the application at http://localhost:8000. Open it in Chrome, where you have [installed Fulcro Inspect](https://book.fulcrologic.com/#_install_fulcro_inspect) and [enabled custom formatters](https://book.fulcrologic.com/#_configure_chrome_development_settings)!

Now (after having accessed the web page!) connect to the cljs REPL: first connect to the nREPL running at port 9001 then execute `(shadow/repl :main)` there. (If you get "_No available JS runtime._" then you likely forgot to load the page in a browser first.)

Finally, open the `holyjak.fulcro-exercises` namespace and get coding, following the instructions provided there in the ns docstring!

**TIP**: Make sure that you select the correct _App_ at the bottom of Fulcro Inspect, if there are multiple (or hard-reload the page to get rid of all the past ones).

#### Troubleshooting and getting help during the exercises

Use repeatedly `(hint <exercise number>)` (as long as there are any more hints for the exercise) to get useful tips when you get stuck.

Leverage the [Fulcro Troubleshooting Decision Tree](https://blog.jakubholy.net/2020/troubleshooting-fulcro/) to help you troubleshoot your problems.

Leverage Fulcro Inspect (especially the DB and perhaps Element tabs), check the Chrome JS Console for warnings and errors.

#### Various problems and solutions

##### Fulcro Inspect shows an empty client DB

It might help to close it, reload the page, then open it again.

##### 'shadow-cljs - (relaod failed)' reported in the browser

If shadow-cljs fails because of a coding error then this error is reported in the browser. It may break live reloading, i.e. you might need to hard-reload the page after you fix it.

### Part 2: Fulcro Puzzles

After you have completed the exercises, you can check you insight and troubleshooting skill by fixing the broken pieces of code presented in the `holyjak.fulcro-exercises.puzzles.puzzles-ws` namespace.

To run the puzzles, stop the exercises process and run instead this:

    npx shadow-cljs watch puzzles
    # or `bb run-puzzles` if you have Babashka

NOTE: For Calva, do instead start the REPL from the editor - [run Jack-in](https://calva.io/connect/#jack-in-let-calva-start-the-repl-for-you), selecting _shadow-cljs_ then the `:puzzles` build.

Then navigate to http://localhost:8023/ and in the left-side menu, under _Cards_, select the first puzzle card.

Try to fix the code so that the card does what it is supposed to. Remember to use primarily the Fulcro Database and Fulcro
Inspector for the troubleshooting! If you get stuck or after you finish your solution,
compare it to the solution in the `holyjak.fulcro-exercises.puzzles.solutions-ws` namespace.

## License

Copyleft © 2021 Jakub Holý

Distributed under the [Unlicense](https://unlicense.org/).
