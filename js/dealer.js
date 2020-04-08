/*
 * The dealer places the cards on the table.
 */

var dealers = {
    dotsAndNumbers1To5: function() {
        return new DotsAndNumbersDealer(1, 5, "1-5 &bull;&bull;&bull;&bull;&bull;");
    },
    dotsAndNumbers0To10: function() {
        return new DotsAndNumbersDealer(0, 10, "0-10 &bull;&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;&bull;");
    },
    alphabet: function() {
        return new AlphabetDealer();
    },
    plus5: function() {
        return new PlusDealer(1, 5, 7, "1+2+3+4+5 max 7");
    },
    plus20: function() {
        return new PlusDealer(0, 20, 20, "0+1+2+...+10 max 20");
    }
}
