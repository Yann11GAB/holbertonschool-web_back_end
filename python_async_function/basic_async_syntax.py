#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """wait_random that takes an integer argument (max_delay)
    and returns a delay between 0 and max_delay seconds.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
