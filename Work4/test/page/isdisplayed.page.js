class emailPreferencesPage {

    get emailPreferences() {
        return $('//*[text()="Browse Docs"]')
        }
        PreferencesIsDisplayed () {
            this.emailPreferences.isDisplayed();
            console.log('browseDocs is Displayed?');
    }
}

module.exports = new emailPreferencesPage()