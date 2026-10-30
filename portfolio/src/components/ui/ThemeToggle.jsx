import { useEffect, useId, useRef, useState } from 'react';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const options = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
];

const ThemeToggle = () => {
  const { preference, theme, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const id = useId();
  const activeOption = options.find((option) => option.value === preference);
  const TriggerIcon = activeOption.Icon;
  const currentLabel = preference === 'system' ? `System, currently ${theme}` : activeOption.label;

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector('input:checked')?.focus();

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const handleFocusIn = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Appearance: ${currentLabel}. Choose a theme`}
        aria-expanded={open}
        aria-controls={`appearance-${id}`}
        title={`Appearance: ${currentLabel}`}
        className="flex items-center justify-center w-11 h-11 shrink-0 bg-surface text-ink border-2 border-outline wobbly-circle sketch-shadow hover:bg-postit hover:-rotate-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-pen transition-transform"
      >
        <TriggerIcon size={19} aria-hidden="true" />
      </button>

      {open && (
        <div
          id={`appearance-${id}`}
          ref={panelRef}
          className="theme-panel absolute right-0 top-full mt-3 w-56 bg-surface text-ink border-2 border-outline wobbly-md p-2 sketch-shadow"
        >
          <fieldset>
            <legend className="px-2 pt-1 pb-2 font-heading font-bold text-lg">Appearance</legend>
            <div className="space-y-1">
              {options.map((option) => {
                const { value, label, Icon } = option;
                return (
                  <label key={value} className="block cursor-pointer">
                    <input
                      type="radio"
                      name={`${id}-theme`}
                      value={value}
                      checked={preference === value}
                      onChange={() => setPreference(value)}
                      className="peer sr-only"
                    />
                    <span className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-hand text-lg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-blue-pen ${preference === value ? 'bg-postit text-ink' : 'hover:bg-muted'}`}>
                      <Icon size={18} aria-hidden="true" />
                      <span className="flex-1">{label}</span>
                      {preference === value && <Check size={17} aria-hidden="true" />}
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="px-2 pt-2 pb-1 font-hand text-sm text-secondary">
              System follows your device settings.
            </p>
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
