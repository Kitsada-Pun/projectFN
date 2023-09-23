<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-6xl font-bold mb-1">Smart Thermometer</span>
        <div class="text-6xl text-primary font-bold mb-3">
          วัดอุณหภูมิ และ ความชื้น
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          เทอร์โมมิเตอร์อัจฉริยะเป็นอุปกรณ์ล้ำสมัยที่ออกแบบมาเพื่อวัดอุณหภูมิและความชื้นที่แม่นยำสำหรับการใช้งานต่างๆ ไม่ว่าคุณจะต้องการตรวจสอบสภาพแวดล้อมในบ้าน สำนักงาน หรือห้องปฏิบัติการ เทอร์โมมิเตอร์ขั้นสูงนี้ก็ครอบคลุมทุกอย่าง
        </p>

        <NuxtLink to="/sign-in">
          <Button
            label="Sing In"
            icon="pi pi-user"
            type="button"
            class="mr-3 p-button-raised"
          ></Button>
        </NuxtLink>
        <!-- <Button label="Live Demo" type="button" class="p-button-outlined"></Button> -->
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden min-h-screen">
      <img src="https://images.unsplash.com/photo-1656359470109-09918c850c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>
</template>
