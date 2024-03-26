class helpPage {

    get helpButton() {
        return $('[href="/help.html"]')
        }
        clickHelpButton () {
            this.helpButton.click();
    }
}

module.exports = new helpPage()