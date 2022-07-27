window.gDataList = (e) => {
  if (!e) return;

  const subList = document.getElementsByClassName(`F_${e.id}`);
  if (subList.length === 1) {
    try {
      const subListData = JSON.parse(subList[0].getAttribute('data-subdetail'));
      let html = `<option value=''>---</option>`;
      for (const item of subListData[e.value]) {
        html += `<option value='${item}'>${item}</option>`;
      }
      subList[0].innerHTML = html;
    } catch {
      subList[0].innerHTML = `<option value=''>---</option>`;
    }
  }
};
