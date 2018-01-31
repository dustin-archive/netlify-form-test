
const { h, app } = window.hyperapp

const state = {}

const actions = {}

const view = (state, actions) =>
  h('div', null, [
    h('form', { id: 'form' }, [
      h('input', { type: 'hidden', name: 'form-name', value: 'info' }),
      h('input', { type: 'text', name: 'name' }),
      h('input', { type: 'tel', name: 'phone' }),
      h('input', { type: 'email', name: 'email' })
    ]),
    h('button', {
      onclick () {
        const form = document.getElementById('form')
        window.fetch('', {
          method: 'post',
          body: new FormData(form) // eslint-disable-line
        })
      }
    }, 'Send')
  ])

app(state, actions, view, document.getElementById('hyperapp'))
