import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    const contents = {
      approved: comment.content,
      pending: 'This comment is awaiting moderation',
      rejected: 'This comment has been rejected',
    }

    let content = contents[comment.status] || ''

    return <li key={comment.id}>{content}</li>
  })

  return <ul>{renderedComments}</ul>
}
