import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'mongoose-validator'

const userSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'The title name is required'],
    },
    firstName: {
      type: String,
      required: true,
      minlength: [3, 'First name must be longer then 3 letter'],
      maxlength: [255, 'First name must be shorter then 255 letters'],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, 'Last name must be longer then 3 letter'],
      maxlength: [255, 'Last name must be shorter then 255 letters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      validate: [
        validator({
          validator: 'isEmail',
          message: 'Oops..please enter valid email',
        }),
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Password must be at lest 8 charters'],
      maxlength: [255, 'Password can not be more then 255 charters'],
    },
    img: {
      type: String,
    },
    country: {
      type: String,
      required: true,
      minlength: [2, 'Country name must be longer then 1 letter'],
      maxlength: [255, 'Country name must be shorter then 255 letters'],
    },
    city: {
      type: String,
      required: true,
      minlength: [2, 'City name must be longer then 1 letter'],
      maxlength: [255, 'City name must be shorter then 255 letters'],
    },
    streetName: {
      type: String,
      required: true,
      minlength: [2, 'Street name must be longer then 1 letter'],
      maxlength: [255, 'Street name must be shorter then 255 letters'],
    },
    streetNumber: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
