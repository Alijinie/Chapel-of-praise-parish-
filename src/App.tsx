import React, { useState } from 'react';
import { TabType, Ministry, Department } from './types';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { HomeTab } from './components/HomeTab';
import { MinistriesTab } from './components/MinistriesTab';
import { MediaTab } from './components/MediaTab';
import { EventsTab } from './components/EventsTab';
import { GivingTab } from './components/GivingTab';
import { ContactTab } from './components/ContactTab';
import { MinistryModal } from './components/MinistryModal';
import { VolunteerModal } from './components/VolunteerModal';
import { PlanVisitModal } from './components/PlanVisitModal';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { ServiceNotesModal } from './components/ServiceNotesModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [selectedMinistryModal, setSelectedMinistryModal] = useState<Ministry | null>(null);
  const [isPlanVisitOpen, setIsPlanVisitOpen] = useState<boolean>(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState<boolean>(false);
  const [isPrayerRequestOpen, setIsPrayerRequestOpen] = useState<boolean>(false);
  const [isServiceNotesOpen, setIsServiceNotesOpen] = useState<boolean>(false);
  const [volunteerDept, setVolunteerDept] = useState<Department | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVolunteer = (dept?: Department) => {
    setVolunteerDept(dept || null);
    setIsVolunteerOpen(true);
  };

  return (
    <div className="bg-[#f7f4ed] text-[#1f1917] min-h-screen flex flex-col selection:bg-[#80182a] selection:text-white overflow-x-hidden font-sans">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Floating Top Navbar / Pill */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
        onOpenLiveStream={() => handleSelectTab('media')}
        onOpenPrayerRequest={() => setIsPrayerRequestOpen(true)}
      />

      {/* Main Tab Views */}
      <main className="flex-1 pt-20 sm:pt-24 pb-20 px-3.5 sm:px-6 max-w-4xl mx-auto w-full">
        {currentTab === 'home' && (
          <HomeTab
            onSelectTab={handleSelectTab}
            onOpenMinistryModal={(m) => setSelectedMinistryModal(m as any)}
            onOpenLive={() => handleSelectTab('media')}
            onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
            onOpenServiceNotes={() => setIsServiceNotesOpen(true)}
          />
        )}

        {currentTab === 'ministries' && (
          <MinistriesTab
            onOpenVolunteer={(deptName) => handleOpenVolunteer({ id: deptName, name: deptName, subtitle: '', icon: 'Users', description: '', requirements: [] } as any)}
            onShowToast={showToast}
          />
        )}

        {(currentTab === 'media' || currentTab === 'sermons') && (
          <MediaTab onShowToast={showToast} />
        )}

        {(currentTab === 'events' || currentTab === 'calendar') && (
          <EventsTab onShowToast={showToast} />
        )}

        {currentTab === 'giving' && (
          <GivingTab onShowToast={showToast} />
        )}

        {(currentTab === 'visit' || currentTab === 'contact') && (
          <ContactTab onShowToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenPrayerRequest={() => setIsPrayerRequestOpen(true)}
      />

      {/* Floating Bottom Navigation Pill (Matches Screenshot 1 - 10) */}
      <MobileNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      {/* Modals */}
      <MinistryModal
        ministry={selectedMinistryModal}
        onClose={() => setSelectedMinistryModal(null)}
        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
        onOpenVolunteer={() => handleOpenVolunteer()}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => {
          setIsVolunteerOpen(false);
          setVolunteerDept(null);
        }}
        preselectedDept={volunteerDept}
        onShowToast={showToast}
      />

      <PlanVisitModal
        isOpen={isPlanVisitOpen}
        onClose={() => setIsPlanVisitOpen(false)}
        onShowToast={showToast}
      />

      <PrayerRequestModal
        isOpen={isPrayerRequestOpen}
        onClose={() => setIsPrayerRequestOpen(false)}
        onShowToast={showToast}
      />

      <ServiceNotesModal
        isOpen={isServiceNotesOpen}
        onClose={() => setIsServiceNotesOpen(false)}
        onShowToast={showToast}
      />
    </div>
  );
}
