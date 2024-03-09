export const validPasswordLength = (password: string) => {
  if (password.length < 8) {
    return false
  }
  else {
    return true
  }
}

export const validPasswordSmallLetter = (password: string) => {
  if (!/[a-z]/.test(password)) {
    return false
  }
  else {
    return true
  }
}

export const validPasswordBigLetter = (password: string) => {
  if (!/[A-Z]/.test(password)) {
    return false
  }
  else {
    return true
  }
}

export const validPasswordNumber = (password: string) => {
  if (!/\d/.test(password)) {
    return false
  }
  else {
    return true
  }
}
