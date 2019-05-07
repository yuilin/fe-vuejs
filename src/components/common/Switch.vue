<template>
    <div class="field">
        <label class="switch">
            <input type="checkbox" true-value="true" value="false" @click="change">
            <span class="check"></span>
            <span class="control-label">{{isSwitched ? 'Hire' : 'Control'}}</span>
        </label>
    </div>
</template>

<script>
export default {
  name: 'mySwitch',
  data () {
    return {
      isSwitched: false
    }
  },
  methods: {
    change () {
      this.isSwitched = !this.isSwitched
      this.$emit('changed', this.isSwitched)
    }
  }
}
</script>

<style scoped>
    .switch {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        color: #4a4a4a;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .switch input[type="checkbox"] {
        position: absolute;
        left: 0;
        opacity: 0;
        outline: none;
        z-index: -1;
    }

    .switch input[type="checkbox"]:checked + .check::before {
        transform: translate3d(100%, 0, 0);
    }

    input[type="checkbox"], input[type="radio"] {
        vertical-align: baseline;
    }

    .switch input[type="checkbox"]:checked + .check {
        background: #7957d5;
    }

    .switch input[type="checkbox"] + .check {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        width: 2.35em;
        padding: .2em;
        background: #b5b5b5;
        border-radius: 1em;
        transition: background .15s ease-out;
    }

    .switch .control-label {
        padding-left: .5em;
        width: 20px;
    }

    .switch input[type="checkbox"] + .check::before {
        content: "";
        display: block;
        border-radius: 1em;
        width: 1.175em;
        height: 1.175em;
        background: #f5f5f5;
        box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05);
        transition: transform .15s ease-out, width .15s ease-out;
        will-change: transform;
    }
</style>
