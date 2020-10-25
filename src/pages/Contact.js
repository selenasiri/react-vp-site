import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Leave us a message and we'll get back to you soon!</p>
      <form>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
        </form>
    </div>
  )
}

export default Contact
