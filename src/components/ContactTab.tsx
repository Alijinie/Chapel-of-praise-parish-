import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Compass, Check, ExternalLink } from 'lucide-react';
import L from 'leaflet';

interface ContactTabProps {
  onShowToast?: (msg: string) => void;
}

export const ContactTab: React.FC<ContactTabProps> = ({ onShowToast = (_msg: string) => {} }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Sunday Celebration Service (8:00 AM)');
  const [isRegistered, setIsRegistered] = useState(false);

  // Initialize interactive Leaflet map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Redemption City / RCBC coordinates
    const rcbcCoords: [number, number] = [6.8833, 3.4500];

    const map = L.map(mapContainerRef.current, {
      center: rcbcCoords,
      zoom: 15,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Custom Wine/Crimson church marker icon
    const customIcon = L.divIcon({
      className: 'custom-chapel-pin',
      html: `
        <div style="
          background-color: #80182a;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          border: 2px solid white;
        ">
          <svg style="width: 20px; height: 20px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v4m-2-2h4" stroke-linecap="round"/>
            <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z"/>
          </svg>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    });

    const marker = L.marker(rcbcCoords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: 'Newsreader', serif; font-size: 15px; font-weight: bold; color: #1c1917; padding: 2px;">
        RCBC Chapel of Praise
      </div>
      <div style="font-size: 12px; color: #666; font-family: sans-serif; margin-top: 2px;">
        Christ's Ambassadors Road<br/>Redemption City, Ogun State
      </div>
    `);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handlePlanVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) {
      onShowToast('Please enter your name.');
      return;
    }
    setIsRegistered(true);
    onShowToast(`Thank you, ${visitorName}! We are honored to welcome you this Sunday.`);
    setTimeout(() => {
      setVisitorName('');
      setVisitorPhone('');
      setIsRegistered(false);
    }, 4000);
  };

  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Redeemed+Christian+Bible+College+Redemption+City',
      '_blank'
    );
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto md:max-w-2xl lg:max-w-3xl pb-24">
      {/* Header (Exact Match to Screenshot 10) */}
      <div className="space-y-2">
        <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
          VISIT
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          Find us on Christ's Ambassadors Road
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Inside the Redeemed Christian Bible College Main Campus, Redemption City, Ogun State.
        </p>
      </div>

      {/* Interactive Map Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm">
        <div ref={mapContainerRef} className="h-64 sm:h-72 w-full z-10" />

        <div className="p-3 bg-[#fbf9f4] border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5 font-medium">
            <Navigation className="w-3.5 h-3.5 text-[#80182a]" />
            <span>Redemption City, Ogun State</span>
          </div>

          <button
            onClick={openGoogleMaps}
            className="text-[#80182a] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Location Cards (Matches Screenshot 10) */}
      <div className="space-y-4">
        {/* Card 1: Location */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            LOCATION
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Christ's Ambassadors Road
          </h3>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Inside RCBC Main Campus, Redemption City (Km 46 Lagos-Ibadan Expressway).
          </p>
        </div>

        {/* Card 2: Campus Access */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            CAMPUS ACCESS
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Main Campus Gates
          </h3>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Car and pedestrian entrance via the main RCBC gate. Follow signs to Chapel of Praise.
          </p>
        </div>

        {/* Card 3: Sunday Parking */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            SUNDAY PARKING
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Designated Parking Bays
          </h3>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Designated parking bays available directly in front of the Main Sanctuary and the Youth Arena.
          </p>
        </div>
      </div>

      {/* Guest Pre-Registration / Plan Visit Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
        <div>
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            FIRST-TIME GUEST
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Let us know you are coming
          </h3>
          <p className="text-stone-600 text-sm mt-1">
            Our protocol team will welcome you at the door and help you find the best seat.
          </p>
        </div>

        <form onSubmit={handlePlanVisit} className="space-y-4 pt-2">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
              FULL NAME
            </label>
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="e.g. Bro. Emmanuel Adeleke"
              className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#80182a]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
              PHONE OR WHATSAPP (FOR DIRECTIONS)
            </label>
            <input
              type="tel"
              value={visitorPhone}
              onChange={(e) => setVisitorPhone(e.target.value)}
              placeholder="+234 800 000 0000"
              className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#80182a]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
              SERVICE TO ATTEND
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#80182a]"
            >
              <option value="Sunday Celebration (8:00 AM) - Main Sanctuary">
                Sunday Celebration (8:00 AM) - Main Sanctuary
              </option>
              <option value="Youth Expression (8:00 AM) - Youth Church">
                Youth Expression (8:00 AM) - Youth Church
              </option>
              <option value="Teenagers Church (8:00 AM) - The Overflow">
                Teenagers Church (8:00 AM) - The Overflow
              </option>
              <option value="Tuesday Digging Deep (6:00 PM)">
                Tuesday Digging Deep (6:00 PM)
              </option>
              <option value="Thursday Faith Clinic (6:00 PM)">
                Thursday Faith Clinic (6:00 PM)
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isRegistered}
            className="w-full sm:w-auto bg-[#80182a] hover:bg-[#6e1423] text-white px-8 py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2"
          >
            {isRegistered ? (
              <>
                <Check className="w-4 h-4" />
                <span>Visit Registered! See you Sunday</span>
              </>
            ) : (
              <span>Register My Visit</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
