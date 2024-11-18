<template>
  <div class="app-container">
    <!-- Nội dung chính của bạn ở đây -->

    <!-- Footer -->
    <div class="footer">
      <el-row justify="center">
        <el-col :span="12">
          <div class="footer-content">
            <p>&copy; 2024 Quản lý Mượn Sách</p>
            <div>
              <el-button @click="signOut(user)" type="primary" size="small"
                >Đăng xuất</el-button
              >
            </div>
            <div>
              <el-link href="https://github.com" target="_blank"
                >GitHub</el-link
              >
              <el-link href="/about" target="_blank">Giới thiệu</el-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  ElButton,
  ElInput,
  ElMessage,
  ElLink,
  ElRow,
  ElCol,
} from 'element-plus';
import { useUserStore } from '@/stores/user';
import { mapStores } from 'pinia';
import { useBookStore } from '@/stores/book';

export default {
  components: {
    ElInput,
    ElButton,
    ElMessage,
    ElLink,
    ElRow,
    ElCol,
  },
  data: () => {
    return {
      value: '',
      user: useUserStore(),
    };
  },
  computed: {
    ...mapStores(useBookStore),
  },
  methods: {
    signOut: (user) => {
      user.SignOut();
      ElMessage('Đăng xuất thành công');
    },
  },
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-top: auto;
  text-align: center;
}

.footer-content {
  font-size: 14px;
}

.footer-content p {
  margin-bottom: 10px;
}

.footer-content .el-link {
  margin: 0 10px;
  font-size: 14px;
}

.footer-content .el-button {
  margin: 0 10px;
}
</style>
