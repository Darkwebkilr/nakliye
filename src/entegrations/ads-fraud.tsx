import { useEffect } from 'react';

export default function AdsTracker() {
  useEffect(() => {
    async function checkAndTrack() {
      let deviceId = localStorage.getItem('ev_device_id');
      if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substring(2) + Date.now();
        localStorage.setItem('ev_device_id', deviceId);
      }

      const urlParams = new URLSearchParams(window.location.search);
      const campaignId = urlParams.get('utm_campaign') || 'default_kampanya';

      try {
        const response = await fetch('https://api.tekirdagugurcannakliyat.com/api/track-click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_id: deviceId, campaign_id: campaignId })
        });

        const data = await response.json();

        if (data.blocked) {
          console.warn("Bu cihaz cezalandırıldı, yönlendiriliyor...");
          window.location.href = "https://tekirdagugurcannakliyat.com/bitti.html"; // veya boş bir sayfa
        }
      } catch (error) {
        console.error("Takip hatası:", error);
      }
    }

    checkAndTrack();
  }, []);

  return null;
}
