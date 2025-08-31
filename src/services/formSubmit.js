// src/services/formSubmit.js

// Helper to submit FormData to a Google Apps Script endpoint
export async function submitToEndpoint({ endpoint, formData }) {
  if (!endpoint) {
    throw new Error('Form endpoint is not configured. Set VITE_*_FORM_ENDPOINT in .env');
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    // Let the browser set multipart/form-data boundary when body is FormData
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Submission failed (${res.status}). ${text}`);
  }
  return res.json().catch(() => ({}));
}

// Build FormData from a plain object, flattening objects/arrays
export function buildFormData(obj) {
  const fd = new FormData();
  Object.entries(obj).forEach(([key, val]) => {
    if (val instanceof File || val instanceof Blob) {
      fd.append(key, val);
    } else if (typeof val === 'object' && val !== null) {
      // Flatten objects/arrays into JSON strings for clarity
      fd.append(key, JSON.stringify(val));
    } else if (val !== undefined && val !== null) {
      fd.append(key, String(val));
    }
  });
  return fd;
}

