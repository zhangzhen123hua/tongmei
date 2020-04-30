<template>
  <div class="main">
    <el-button size="mini"
               @click="handleEdit()">编辑</el-button>
    <el-dialog title="编辑"
               :visible.sync="dialogVisible"
               width="800px">
      <el-form>
        <div v-for="(item, index) in datalist"
             :key="index">
          <el-form-item :label="index + '项'">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
          <el-form-item :label="'值'">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="editSubmit(datalist)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    xied: Array,
  },
  data () {
    return {
      dialogVisible: false,
      dialogValue:null
    };
  },
   mounted(){
    window.addEventListener("beforeunload", ()=>{
        this.dialogValue=localStorage.getItem('dataDialog')
    })
  },
  computed: {
    datalist: {
      get () {
        return this.xied;
      },
    },
  },
  methods: {
    editSubmit (val) {
      this.dialogVisible = false;
      window.localStorage.setItem('dataDialog', val)
    },
    handleEdit () {
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.main ::v-deep {
  .el-button {
    background-color: #062467;
    border-color: #45a1ff;
    color: #45a1ff;
    padding: 5px 13px;
  }
  .el-dialog,
  .el-input__inner {
    background-color: #062467;
  }
  .el-form-item__label,
  .el-dialog__title,
  .el-dialog__close,
  .el-input__inner {
    color: #45a1ff;
  }
  .el-input__inner {
    border-color: #45a1ff;
  }
}
</style>
<style></style>
