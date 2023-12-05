import { describe, it, expect } from 'vitest'

import { sum } from "./sum"

describe("sum Unit Test Suites", () => {
    it('should return something', () => {
        expect(sum(2, 2)).toBeDefined()
    })
    
    it('should return a number', () => {
        expect(typeof sum(2, 2)).toBe('number')
    })
    
    it('should return 4', () => {
        expect(sum(2, 2)).toBe(4)
    })
})

