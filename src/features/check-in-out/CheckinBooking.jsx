import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { checkin, isCheckIn } = useCheckin();
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  console.log(booking);
  const moveBack = useMoveBack();
  useEffect(() => setConfirmPaid(booking?.isPaid || false), [booking?.isPaid]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          {/* <CheckBox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id={"breakfast"}
          >
            want to add breakfast for{" "}
            <b>{formatCurrency(optionalBreakfastPrice)}</b>?
          </CheckBox> */}
          <StyledCheckbox>
            <input
              type="checkbox"
              id={"breakfast"}
              checked={addBreakfast}
              onChange={() => {
                setAddBreakfast((add) => !add);
                setConfirmPaid(false);
              }}
            />
            <label htmlFor={"breakfast"}>
              {" "}
              want to add breakfast for{" "}
              <b>{formatCurrency(optionalBreakfastPrice)}</b>?
            </label>
          </StyledCheckbox>
        </Box>
      )}
      <Box>
        {/* <CheckBox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id={"confirm"}
          disabled={confirmPaid}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </CheckBox> */}
        <StyledCheckbox>
          <input
            type="checkbox"
            id={"confirm"}
            checked={confirmPaid}
            onChange={() => setConfirmPaid((confirm) => !confirm)}
            disabled={confirmPaid}
          />
          <label htmlFor={"confirm"}>
            I confirm that {guests.fullName} has paid the total amount of{" "}
            {!addBreakfast
              ? formatCurrency(totalPrice)
              : `${formatCurrency(
                  totalPrice + optionalBreakfastPrice
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalBreakfastPrice
                )})`}
          </label>
        </StyledCheckbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
