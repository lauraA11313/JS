var user = {
    name: "Tom",
 	format: function (beginMsg, endMsg) {
        console.log(beginMsg + this.name + endMsg)
 	},
}

var tomFormat = user.format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"

var tomFormatAnon = function() {
 	user.format();
};

tomFormat("<<<", ">>>"); // "<<<Tom>>>"