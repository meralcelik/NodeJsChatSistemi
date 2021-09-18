const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// models
const User = require('../models/users');

passport.use(
	new GoogleStrategy({
		clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
		clientSecret: process.env.GOOGLE_LOGIN_SECRET_ID,
		callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
	},
	((accessToken, refreshToken, profile, done) => {
		const data = profile._json;

		User.findOrCreate({
			'googleId': profile.id
		}, {
			name: profile.name.givenName,
			surname: profile.name.familyName,
			//  profilePhotoUrl: profile.profile,
		}, (err, user) => {
			return done(err, user);
		})
	})
));

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

module.exports = passport;