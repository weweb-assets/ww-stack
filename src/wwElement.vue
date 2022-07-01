<template>
  <draggable 
    :list="wwElementState.props.items" 
    :item-key="wwElementState.props.itemKey || 'id'"
    :clone="el => el"
    :group="wwElementState.props.group" 
    :sort="wwElementState.props.sortable"
    @change="onChange"
  >
    <template #header>
      <wwLayout path="headerElement"></wwLayout>
    </template>
    <template #item="{ element, index: itemIndex }">
      <div>
        <wwLayoutItemContext :index="itemIndex" :item="element" is-repeat :data="element">
          <wwLayout path="itemElement"></wwLayout>
        </wwLayoutItemContext>
      </div>
    </template>
    <template #footer>
      <wwLayout path="footerElement"></wwLayout>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  inject: {
    customHandler: {defaultValue: null}
  },
  props: {
    wwElementState: { type: Object, required: true },
    content: { type: Object, required: true }
  },
  methods: {
    onChange(change) {
      this.customHandler && this.customHandler(change, {...this.wwElementState.props})
    }
  }
};
</script>
