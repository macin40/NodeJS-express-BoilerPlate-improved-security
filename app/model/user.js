const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {type: String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    phone: {type: String, default: ''},
    token: {type: String, default: ''},
    addedOn: {type: Number, default: Date.now()},
    modifiedOn: {type: Number, default: 0},
    deletedOn: {type: Number, default: 0},
    isInactive: {type: Number, default: 0},
});

UserSchema.method({
    saveUser: function () {
        return this.save();
    }
});
// UserSchema.statics();

mongoose.model('User', UserSchema);
