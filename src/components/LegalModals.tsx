import React from 'react';
import { X, ShieldCheck, FileText, Mail } from 'lucide-react';

export type ModalType = 'privacy' | 'terms' | 'contact' | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border border-[#EAEAEA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal: Privacy Policy */}
        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111111]">Privacy Policy</h3>
            </div>
            
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p className="font-semibold text-neutral-900">
                Effective Date: October 2026
              </p>
              <p>
                At <strong>Recova: Recovery & Sleep</strong>, developed by <strong>Dilli Babu K.</strong>, we firmly believe that your biometric, sleep, and recovery data belongs strictly to you.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">1. Local Storage & Data Privacy</h4>
              <p>
                Recova is designed to operate locally on your Android device to log your sleep habits, training check-ins, and recovery readiness. We do not sell, rent, or trade your personal wellness information.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">2. Sensor Usage</h4>
              <p>
                Recova utilizes your phone's built-in passive accelerometer and motion detection solely during your scheduled rest window to determine sleep onset and wakefulness. Audio is never recorded, listened to, or analyzed.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">3. Third-Party Trackers & Ads</h4>
              <p>
                Recova contains zero advertising networks, zero third-party telemetry brokers, and zero data-mining trackers.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">4. Contact Us</h4>
              <p>
                For questions regarding your privacy, please contact Dilli Babu K. directly via the Contact section.
              </p>
            </div>
          </div>
        )}

        {/* Modal: Terms of Service */}
        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111111]">Terms of Service</h3>
            </div>
            
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p className="font-semibold text-neutral-900">
                Effective Date: October 2026
              </p>
              <p>
                By downloading, accessing, or using <strong>Recova: Recovery & Sleep</strong> ("the App"), provided by <strong>Dilli Babu K.</strong>, you agree to these Terms.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">1. Wellness & Informational Use Only</h4>
              <p>
                Recova is designed as an informational fitness and sleep awareness tool. Recova is <em>not</em> a medical diagnostic device and does not substitute for qualified medical advice, diagnosis, or treatment. Always consult a physician before undertaking strenuous physical training regimens.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">2. Free License</h4>
              <p>
                Recova is provided free of charge for personal, non-commercial use on compatible Android hardware via the Google Play Store.
              </p>
              <h4 className="font-bold text-neutral-900 text-base mt-4">3. Disclaimer of Warranties</h4>
              <p>
                The app is provided on an "as is" and "as available" basis without warranties of any kind.
              </p>
            </div>
          </div>
        )}

        {/* Modal: Contact */}
        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111111]">Get in Touch</h3>
            </div>
            
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                We'd love to hear your thoughts, feature requests, or feedback on Recova.
              </p>
              
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Developer & Creator
                </div>
                <div className="text-base font-bold text-neutral-900">
                  Dilli Babu K.
                </div>
                <div className="text-sm text-neutral-600">
                  Email:{' '}
                  <a
                    href="mailto:recova.app0@gmail.com"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    recova.app0@gmail.com
                  </a>
                </div>
                <div className="text-sm text-neutral-600">
                  Google Play Store App:{' '}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Recova.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    Recova: Recovery & Sleep
                  </a>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                You can also submit feedback directly from the Google Play Store listing reviews.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-black text-white text-sm font-semibold rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
