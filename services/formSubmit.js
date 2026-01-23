// src/services/formSubmit.js

// Helper to submit FormData to a Google Apps Script endpoint
export async function submitToEndpoint({ endpoint, formData }) {
  if (!endpoint) {
    throw new Error('Form endpoint is not configured. Set VITE_*_FORM_ENDPOINT in .env');
  }
  
  // console.log('Submitting to endpoint:', endpoint);
  console.log('FormData entries:');
  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`  ${key}: File(${value.name}, ${value.size} bytes, ${value.type})`);
    } else {
      console.log(`  ${key}: ${typeof value === 'string' && value.length > 100 ? value.substring(0, 100) + '...' : value}`);
    }
  }
  
  const res = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    // Let the browser set multipart/form-data boundary when body is FormData
  });
  
  console.log('Response status:', res.status);
  console.log('Response headers:', Object.fromEntries(res.headers.entries()));
  
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('Response error text:', text);
    throw new Error(`Submission failed (${res.status}). ${text}`);
  }
  
  const responseText = await res.text();
  console.log('Response text:', responseText);
  
  try {
    return JSON.parse(responseText);
  } catch (parseErr) {
    console.error('Failed to parse JSON response:', parseErr);
    return { ok: true, message: 'Submitted successfully' };
  }
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

