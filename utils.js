async function submitForm(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
}

function generateId(prefix, paramId) {
  const date = new Date().toISOString().slice(0,10).replace(/-/g, '').slice(2);
  const rand = Math.floor(100 + Math.random() * 900);
  return `${prefix}-${paramId}-${date}-${rand}`;
}

function generateQR(url, el) {
  const qr = new QRious({ element: el, value: url, size: 200, foreground: 'black', background: 'white' });
  return qr.toDataURL();
}
