import React, { useEffect, useMemo, useRef, useState } from 'react'
import './style.css'

const ExGoogleAutoComplete = ({ apiKey, onPlaceSelect, selectedPlace, useAutocomplete, onUseAutoComplete }) => {
  const [autocomplete, setAutocomplete] = useState(null)
  const [address, setAddress] = useState(selectedPlace.formatted_address)
  const [latitude, setLatitude] = useState(selectedPlace.geometry.location.lat)
  const [longitude, setLongitude] = useState(selectedPlace.geometry.location.lng)

  const inputRef = useRef(null)
  const addressRef = useRef(null)
  const latitudeRef = useRef(null)
  const longitudeRef = useRef(null)

  useEffect(() => {
    if (useAutocomplete && apiKey) {
      const script = document.createElement('script')
      script.id = 'GoogleAutocomplete'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        const options = {
          types: ['address'],
          componentRestrictions: { country: 'us' },
        }
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options)
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          if (place.geometry) {
            const formattedAddress = place.formatted_address
            const latitude = place.geometry.location.lat()
            const longitude = place.geometry.location.lng()
            const addressData = {
              formatted_address: formattedAddress,
              geometry: { location: { lat: latitude, lng: longitude } },
            }
            onPlaceSelect(addressData)
          }
        })
        setAutocomplete(autocomplete)
      }
      document.head.appendChild(script)
    }
  }, [useAutocomplete, apiKey, onPlaceSelect])

  const handleUseAutocompleteChange = () => {
    onUseAutoComplete(!useAutocomplete)
  }

  const handleManualAddressChange = () => {
    const address = addressRef.current.value
    const latitude = parseFloat(latitudeRef.current.value)
    const longitude = parseFloat(longitudeRef.current.value)
    setAddress(address)
    setLatitude(latitude)
    setLongitude(longitude)
  }

  const handleManualAddressBlur = () => {
    const addressData = { formatted_address: address, geometry: { location: { lat: latitude, lng: longitude } } }
    onPlaceSelect(addressData)
  }

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  return (
    <div>
      <div className="LabelArea">
        <div className="LeftLabel">
          <span>Address:</span>
          <span className="requiredIndicator">*</span>
        </div>
        <div className="RightLabel">
          Use Google Maps Autocomplete
          <input
            className="checkBoxSelector"
            type="checkbox"
            checked={useAutocomplete}
            onChange={handleUseAutocompleteChange}
          />
        </div>
      </div>
      {useAutocomplete ? (
        <div>
          <input
            className="autocomplete-input AddressInput"
            ref={inputRef}
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
      ) : (
        <div>
          <div>
            <input
              className="AddressInput"
              id="address"
              placeholder="Enter the Address"
              ref={addressRef}
              type="text"
              onChange={handleManualAddressChange}
              onBlur={handleManualAddressBlur}
              value={address}
              required
            />
          </div>
          <div className="LocationArea">
            <div>
              <input
                id="latitude"
                ref={latitudeRef}
                type="number"
                step="any"
                onChange={handleManualAddressChange}
                onBlur={handleManualAddressBlur}
                required
                placeholder="Enter Latitude"
                className="LocationFields"
                value={latitude}
              />
            </div>
            <div>
              <input
                id="longitude"
                ref={longitudeRef}
                type="number"
                step="any"
                onChange={handleManualAddressChange}
                onBlur={handleManualAddressBlur}
                required
                placeholder="Enter Longitude"
                className="LocationFields"
                value={longitude}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExGoogleAutoComplete
