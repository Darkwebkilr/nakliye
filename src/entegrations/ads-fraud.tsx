import { useEffect } from "react";

export default function AdsFraud() {
  useEffect(() => {
    async function checkAndTrack() {
      const urlParams = new URLSearchParams(window.location.search)
      const gclid = urlParams.get("gclid")

      if (!gclid) return
      let deviceId = localStorage.getItem("evo_device_id")
      if (!deviceId) {
        deviceId = "device_" + Math.random().toString(36).substring(2, 15) + Date.now()
        localStorage.setItem("evo_device_id", deviceId)
      }
      const campaignId = urlParams.get("campaign_id") || "default_kampanya"
      try {

        const response = await fetch("https://api.tekirdagugurcannakliyat.com/api/track-click", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            device_id: deviceId,
            campaign_id: campaignId
          })
        })
        const data = await response.json()
        if (data.blocked) {
          window.location.href = "https://tekirdagugurcannakliyat.com/bitti.html"
        }
      } catch (err) {
        console.error(err)
      }
    }
    checkAndTrack()
  }, [])
  return null
}



