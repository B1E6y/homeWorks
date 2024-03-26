class apiPage {

    get apiButton() {
        return $('[href="/docs/api.html"]')
        }
        clickApiButton () {
            this.apiButton.click();
    }
}

module.exports = new apiPage()