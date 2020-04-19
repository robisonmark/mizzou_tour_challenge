<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.prevent.stop="$parent.$emit('close')">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header">
            </slot>
            <font-awesome-icon :icon="['fas', 'times']" @click.prevent.stop="$parent.$emit('close')"></font-awesome-icon>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    max-width: 45vw;
    width: 100%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    max-height: 75vh;
    overflow-y: auto;
    position: relative;
    @include montserrat;
  }

  .modal-header {
    background-color: #e0e0e0;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-body {
    min-height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
  }
</style>
