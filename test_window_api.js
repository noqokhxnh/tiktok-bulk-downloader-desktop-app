// Simple test to verify window.api is available
console.log('Testing window.api availability...');

// Check if window.api is defined
if (typeof window !== 'undefined' && window.api) {
  console.log('✅ window.api is defined');
  
  // Test if getDefaultDownloadPath method exists
  if (typeof window.api.getDefaultDownloadPath === 'function') {
    console.log('✅ window.api.getDefaultDownloadPath is available');
    
    // Try to call the method
    window.api.getDefaultDownloadPath()
      .then(result => {
        console.log('✅ window.api.getDefaultDownloadPath() call successful:', result);
      })
      .catch(error => {
        console.error('❌ window.api.getDefaultDownloadPath() call failed:', error);
      });
  } else {
    console.error('❌ window.api.getDefaultDownloadPath is not a function');
  }
} else {
  console.error('❌ window.api is undefined');
}