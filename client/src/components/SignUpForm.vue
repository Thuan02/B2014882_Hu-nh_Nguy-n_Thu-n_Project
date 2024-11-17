<script>
import { useUserStore } from '@/stores/user';
import { ElMessage } from 'element-plus';

const user = useUserStore();

export default {
  components: {},
  data: () => {
    return {
      Holot: '',
      Ten: '',
      GioiTinh: '',
      DiaChi: '',
      SoDienThoai: '',
      password: '',
      rePassword: '',
      message: '',
    };
  },

  methods: {
    submit: async function () {
      if (
        this.password == this.rePassword &&
        this.password &&
        this.SoDienThoai &&
        this.Holot &&
        this.DiaChi &&
        this.GioiTinh
      ) {
        this.message = await user.SignUp({
          Holot: this.Holot,
          Ten: this.Ten,
          GioiTinh: this.GioiTinh,
          DiaChi: this.DiaChi,
          SoDienThoai: this.SoDienThoai,
          password: this.password,
        });

        // this.$emit('handleSubmit', {
        //     Holot: this.Holot,
        //     Ten: this.Ten,
        //     GioiTinh: this.GioiTinh,
        //     DiaChi: this.DiaChi,
        //     SoDienThoai: this.SoDienThoai,
        //     password: this.password,
        // });
      } else {
        this.message = 'Mật khẩu xác thực không chính xác';
      }
      ElMessage(this.message);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="loginContainer">
      <div class="loginBox">
        <div>
          <img src="../assets/img/logo1.png" class="logo" />
        </div>
        <div class="flex gap-1 m-4">
          <input
            type="text"
            class="form-control mt-4"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Số điện thoại"
            v-model="SoDienThoai"
          />
          <input
            type="password"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Mật khẩu"
            v-model="password"
          />
          <input
            type="password"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Mật khẩu xác thực"
            v-model="rePassword"
          />
          <input
            type="text"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Họ"
            v-model="Holot"
          />
          <input
            type="text"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Tên"
            v-model="Ten"
          />
          <input
            type="text"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Giới tính"
            v-model="GioiTinh"
          />
          <input
            type="text"
            class="form-control mt-3"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Địa chỉ"
            v-model="DiaChi"
          />
        </div>
        <button type="button" class="btn btn-primary mt-2" @click="submit">
          Đăng ký
        </button>
        <span class="mt-4"
          >Nếu đã có tài khoản?
          <router-link to="/login"><span>Đăng nhập</span></router-link></span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  .loginContainer {
    min-width: 600px;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .loginBox {
      box-shadow: rgba(240, 88, 232, 0.25) 0px 54px 55px,
        rgba(240, 88, 232, 0.25) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 32px 16px;
      border-radius: 4px;
      .logo {
        width: 80px;
      }

      .input {
        width: 100%;
        padding: 12px;
        margin-bottom: 16px; /* Khoảng cách giữa các input */
        border: 1px solid #ccc; /* Đường viền cho input */
        border-radius: 4px; /* Bo góc cho input */
        font-size: 16px;
      }
    }
  }
}
</style>
