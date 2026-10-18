import { useEffect } from "react";

export default function AdsFraud() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const gclid = urlParams.get("gclid")

    if (!gclid) return
    let deviceId = localStorage.getItem("evo_device_id")
    if (!deviceId) {
      deviceId = "device_" + Math.random().toString(36).substring(2, 15) + Date.now()
      localStorage.setItem("evo_device_id", deviceId)
    }
    const campaignId = urlParams.get("campaign_id") || "default_kampanya"
    fetch("http://129.159.15.56:3000/api/track-click", {
      method: "POST",
      body: JSON.stringify({
        device_id: deviceId,
        campaign_id: campaignId
      })
    })
      .then(res => res.json())
      .then(data => console.log("Sahte Tıklama Koruması Açık:", data))
      .catch(err => console.log("Hata!", err))
  }, [])
  return null
}



