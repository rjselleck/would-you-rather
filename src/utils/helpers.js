export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, user) {
  const { id, author, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = user

  return {
    id,
    name,
    author,
    timestamp,
    avatar: avatarURL,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    voteOne: optionOne.votes.length,
    voteTwo: optionTwo.votes.length,
  }
}
