<template>
  <div class="pagination">
    <button class="btn">&lt;</button>
    <span class="page-num">1</span>
    <span class="page-num">2</span>
    <span class="page-num">3</span>
    <button class="btn">&gt;</button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  background-color: #c8fae6;
  color: #2c3e50;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2c3e50;
  color: #fff;
}

.page-num {
  margin: 0 8px;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #fff;
  color: #2c3e50;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

</style>
  <!-- 서버 통신 작업 이후에 API로 받아온 pagination 정보를 다룰 수 있도록 조치할 예정. -->