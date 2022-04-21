import { u128, context } from "near-sdk-as";
import { Score, listedScores } from "./model"

import {ft_transfer_call_impl, ft_initialize_impl, FungibleTokenMetadata, ft_metadata_impl, ft_transfer_impl, ft_total_supply_impl, ft_balance_of_impl, ft_mint_impl, ft_burn_impl} from "openblimp";
import { storage_deposit_impl, storage_withdraw_impl, storage_unregister_impl, storage_balance_bounds_impl, storage_balance_of_impl } from "openblimp";
import { FungibleTokenStorageBalance, FungibleTokenStorageBalanceBounds} from "openblimp";

/**
 * GET/SET score 
 */
export function saveScore(score: Score): void {
  assert(typeof(score.value) === "number", "Invalid input, score value type must be number");
  assert(typeof(score.timestamp) === "number", "Invalid input, timestamp value type must be number");

  listedScores.set(context.sender, Score.fromPayload(score))
}

export function getScore(id: string): Score | null {
  assert(id.length > 0, "Id is required");
  return listedScores.get(id);
}

export function getScores(): Score[] {
  return listedScores.values();
}

/**
 * Fungible token
 */
const base64TokenSvg:string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABPlJREFUeJzVWz1vU1kQPba8aYkVUgAF2oZttkqXgnJr9jdsm4oegZDot3Kbn4DEr0hnehqUJhTryHGbLaAIY43nzdyZue9ekxzJEnbeu+/Omc87b5h8/uv37zBweHqw/fejk8cAgMvF1c41z8+e7nzfLFfqWjcXt9Zj1GfS87RnWnss3SevI0wjG7GE18A3MAacSEkyhyTWus9SgEqAxpYlvPa7RoKlAYmopUTvkSTIa00LAOLatEiQ9x+eHmw/rVFDHADMGu9jAI3EzXKFw9MDddO15GixI4KiBWQQiQ8E2mQrSygJ7+1rYmUBa9GMoKXgBdgZIyqIlqW8+yTpaQKszXB4gtdCS2slk/eEBwouQP5paclCL+Hl2lqQJVwurkLCAw2DoBT8nzf/jVrver3e+f5p8cJ8FpArljhMF+A3e4UQ39BYwSU4EZwEgueOJeFvLm7bZQGgvfAAcDSf42g+BwC8OvuSutcSnhdEKQI006PfegjPUUsCh1YJui4A+IGtt/Ac5BLcHbwUSdAKr2mkNC352T6FB2KWEBUeYC4whoR9Q5KgWShPkaVzwpT7hWcNkoR9az8CnrUA/5C0tQB+Yc9iphUsVxh1GOLV3/Ozpw+CCA6+32gFa6bBbAn8K0BWMAaj64D7gFdnX6q0DwgCSsfL1rV+L2Qtt2kp/BChEpDpAt9HyNRewoCAhyy8NP9Io3QGxHpzl4urcBCker1FlM5CE5rvWyp2xwK8IiJrFdfr9aCxMRbZ9bw3TGYQ9LSdEa4VEd4aUvslzROKWSBi8hnBaonoYUnAnevv9AQ3y1Ux/0dd4Gg+V3t6VLfzv8k4kSWU1q7FFNhNG5vlyiwmLIvQNCQF087v0SBZI6CnOAr8g8MQfTxtRzZlCcj7fJF7OHmtM0sxBmj9dQ5Jgma+JCz/eMiQo8GLXTztT76+/eN79s2qfEBPDVnI+H/pJcmgEIqQQQtqTJeC2D4LIy2ga5jKVnGPd/hR05eoTX0yiJdcQm2JEaIkSDPM+nwJWoZpkf4IU2n+koge0xxRcPKIiJLwpRRuYQoMhYyQsK/ukGZBlvA1MN8O31zc7ghujbTsA0TC+Yfj0PWZznD4xchDQXagIzQnCAzd4r41TKyBCW9QYib/SIK2GnjsBa9BE1VQ9zE5D1b5HEHGCs1R2Uhge3Ty2I36PDJHChjrjG8JHw2AGqy3xTcXt0MLKEV7IoGYL5nh9Xpd1OSYAimq+chr8qn2Y+Yhl4urbQ5uUZm1QKaUL5bCFjSta4VIjzaWBxKc9zZKcPsBFqxR9B5WEPV/LrwGdUTGW9RrinBoriBr+LGw9uIJb0GdD7AeHCGCk6B1jLJEcO33KL7SL0ejJNQSwS2GXxOZBK05qwzSYMsDD+/KcBK09jiHNwLHEYn2dLDTOl/pStDK+/L0SNBaU9FA2WNK5fVHGov8DUCSAK8azJBQAgmetUbNFd5/uxMUH/V50Nn2AoF3T/7f+R5tgFgkRDFW63ca1mXSYFrAgBg2EnP+4bjom9HhhBKy2n9taNjD5O8/X9TdKSAthhD5by0cGfO3rDeDZsdhvhmLjGwsiD5vDGbeqa0GfHP/Vq5ROpW2Eh74WQj1ev8O3Plmxj89C2kpPCBcoOdsD5FwflK/RivhubInL58dq+rp/R7PO+FtlquBC4whwLJw8yzQ0y2A/KRpjfCRk+gP7BctxcDTuEMAAAAASUVORK5CYII="

export function ft_transfer(receiver_id: string, amount: string, memo: string=""): void {
    assert(receiver_id.length > 0, "Receiver Id is required");
    assert(amount.length > 0, "Amount is required");
    
    ft_transfer_impl(receiver_id, u128.from(amount), "a");
}

export function ft_transfer_call(receiver_id: string, amount: string, msg: string, memo: string=""): void {
    assert(receiver_id.length > 0, "Receiver Id is required");
    assert(msg.length > 0, "Message is required");

    ft_transfer_call_impl(receiver_id, u128.from(amount), msg, "a");
}

export function ft_total_supply(): string {
    return ft_total_supply_impl().toString();
}

export function ft_balance_of(account_id: string): string {
    assert(account_id.length > 0, "Account Id is required");

    return ft_balance_of_impl(account_id).toString();
}

export function ft_initialize():void{
    ft_initialize_impl("DANGER", "DANGER", 0, base64TokenSvg, "", "");
}

export function ft_mint(account: string, amount: string):void{
    assert(account.length > 0, "Account is required");
    assert(amount.length > 0, "Amount is required");

    ft_mint_impl(account, u128.from(amount))
}

export function ft_burn(account: string, amount: string):void{
    assert(account.length > 0, "Account is required");
    assert(amount.length > 0, "Amount is required");

    ft_burn_impl(account, u128.from(amount))
}

export function ft_metadata():FungibleTokenMetadata{
    return ft_metadata_impl();
}

export function storage_deposit(account_id: string = context.predecessor, registration_only: boolean = false):FungibleTokenStorageBalance{
    assert(account_id.length > 0, "Account Id is required");

    return storage_deposit_impl(account_id, registration_only)
}

export function storage_withdraw(amount: string | null):FungibleTokenStorageBalance{
    return storage_withdraw_impl(amount)
}

export function storage_unregister(force: boolean):boolean {
    return storage_unregister_impl(false);
}

export function storage_balance_bounds():FungibleTokenStorageBalanceBounds{
    return storage_balance_bounds_impl()
}

export function storage_balance_of(account_id: string):FungibleTokenStorageBalance{
    assert(account_id.length > 0, "Account Id is required");

    return storage_balance_of_impl(account_id)
}