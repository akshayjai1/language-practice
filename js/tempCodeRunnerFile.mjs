wMask, op + 1)
        maskScore = Math.max(maskScore, m.get(mask) || 0)
        m.set(mask, maskScore || 0)