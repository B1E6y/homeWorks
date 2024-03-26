class contributePage {

    get contributePage() {
        return $('[href="/docs/contribute.html"]')
        }
        clickContributeButton () {
            this.contributePage.click();
    }
}

module.exports = new contributePage()