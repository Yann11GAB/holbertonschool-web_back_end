#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from typing import List
from concurrent_coroutines import wait_n
import time


def measure_time(n: int, max_delay: int) -> float:
    """
    Function that measures the total execution time of wait_n(n, max_delay)
    and returns the time in seconds.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
