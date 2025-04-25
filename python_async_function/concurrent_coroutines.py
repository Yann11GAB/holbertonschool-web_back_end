#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from typing import List
from basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that spawns wait_random n times with the specified max_delay
    """
    delays = []
    for coro in asyncio.as_completed([wait_random(max_delay)
                                     for _ in range(n)]):
        delay = await coro
        delays.append(delay)
    return delays
