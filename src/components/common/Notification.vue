<template>
    <transition name="fade">
        <div v-if="this.type === 'success'" class="notification success" @click="clear">
            <div class="message">{{this.message}}</div>
        </div>
        <div v-else-if="this.type === 'error'" class="notification error" @click="clear">
            <div class="message">{{this.message}}</div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Notification',
  data () {
    return {
      message: null,
      type: null
    }
  },
  methods: {
    /**
     * Display success message
     * @param message
     */
    success (message) {
      this.message = message
      this.type = 'success'
      setTimeout(this.clear, 1000)
    },
    /**
     * Display error
     * @param message
     */
    error (message) {
      this.message = message
      this.type = 'error'
      setTimeout(this.clear, 1000)
    },
    /**
     * Clear message
     */
    clear () {
      this.message = null
      this.type = null
    }
  }
}
</script>

<style scoped>
    .notification {
        width: 300px;
        height: 80px;
        position: fixed;
        margin-left: 0;
        margin-top: 100px;
        top: 0
    }

    @media screen and (max-width: 900px) {
        .notification {
            margin-left: 20px;
            margin-top: 5px;
        }
    }

    @media screen and (max-width: 400px) {
        .notification {
            width: 80%;
            margin-top: 5px;
        }
    }

    .success {
        background-color: rgba(0, 128, 0, 0.4);
        box-shadow: 0 0 2px 1px forestgreen, inset 0 0 1px 1px forestgreen;
        border-radius: 3px;
    }

    .error {
        background-color: rgba(255, 0, 0, 0.4);
        box-shadow: 0 0 2px 1px lightcoral, inset 0 0 1px 1px lightcoral;
        border-radius: 3px;
    }

    .message {
        padding: 30px;
        font-weight: bold;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.7s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0
    }
</style>
