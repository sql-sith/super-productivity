import { NightwatchBrowser } from 'nightwatch';

const ADD_NOTE_BTN = '#add-note-btn';
const TEXTAREA = 'dialog-add-note textarea';
const ADD_NOTE_SUBMIT_BTN = 'dialog-add-note button[type=submit]:enabled';
const NOTES_WRAPPER = 'notes';
const ROUTER_WRAPPER = '.route-wrapper';

module.exports = {
  async command(this: NightwatchBrowser, noteName: string) {
    return (
      this
        //
        .waitForElementVisible(ROUTER_WRAPPER)
        .setValue('body', 'N')

        .waitForElementVisible(ADD_NOTE_BTN)

        .click(ADD_NOTE_BTN)

        .waitForElementVisible(TEXTAREA)
        .setValue(TEXTAREA, noteName)

        .click(ADD_NOTE_SUBMIT_BTN)
        .moveToElement(NOTES_WRAPPER, 10, 50)
    );
  },
};
